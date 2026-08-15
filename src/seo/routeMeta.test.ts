import { describe, expect, it } from "vitest";
import { getRouteMeta } from "./routeMeta";

describe("route metadata", () => {
  it("provides indexable metadata for the homepage and legal pages", () => {
    const paths = ["/", "/privacy-policy", "/terms"];
    const metadata = paths.map(getRouteMeta);

    expect(new Set(metadata.map((item) => item.title)).size).toBe(paths.length);
    metadata.forEach((item, index) => {
      expect(item.canonicalPath).toBe(paths[index]);
      expect(item.robots ?? "index, follow").toBe("index, follow");
    });
  });

  it("keeps unknown pages out of search results", () => {
    expect(getRouteMeta("/missing").robots).toBe("noindex, nofollow");
  });
});
