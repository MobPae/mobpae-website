import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// TEMPORARY: lets `npm run dev` serve api/enquiry.ts locally, since plain
// `vite dev` has no HTTP server wired to it on its own. Safe to delete
// this plugin (and the loadEnv wiring below) once the real backend is
// deployed and api/enquiry.ts is removed.
function enquiryDevApiPlugin(): Plugin {
  return {
    name: 'enquiry-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/enquiry', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }))
          return
        }

        let raw = ''
        req.on('data', (chunk) => {
          raw += chunk
        })
        req.on('end', () => {
          void (async () => {
            try {
              const mod = await server.ssrLoadModule('/api/enquiry.ts')
              const payload = raw ? JSON.parse(raw) : {}
              const result = await mod.handleEnquiryRequest(payload)
              res.statusCode = result.status
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(result.body))
            } catch (error) {
              console.error('Dev enquiry middleware error', error)
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: false, error: 'Internal error' }))
            }
          })()
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Non-VITE_-prefixed vars (SMTP_*, MAIL_FROM*, ENQUIRY_TO_EMAIL) aren't
  // loaded onto process.env by Vite automatically — only exposed to client
  // code via import.meta.env when VITE_-prefixed. Load them here so the dev
  // middleware above (running in this Node process) can read them.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), enquiryDevApiPlugin()],
    build: {
      // No source maps in the shipped build — DevTools' Sources tab
      // should only ever show the bundled, minified output, never a
      // reconstructed tree of the original component files.
      sourcemap: false,
    },
  }
})
