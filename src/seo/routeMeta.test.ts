import { describe, expect, it } from "vitest";
import { getRouteMeta } from "./routeMeta";

describe("route metadata", () => {
  it("provides distinct, indexable metadata for primary pages", () => {
    const paths = ["/", "/employers", "/employees", "/how-it-works", "/product"];
    const metadata = paths.map(getRouteMeta);

    expect(new Set(metadata.map((item) => item.title)).size).toBe(paths.length);
    expect(new Set(metadata.map((item) => item.description)).size).toBe(paths.length);
    metadata.forEach((item, index) => {
      expect(item.canonicalPath).toBe(paths[index]);
      expect(item.robots ?? "index, follow").toBe("index, follow");
    });
  });

  it("keeps placeholder and unknown pages out of search results", () => {
    expect(getRouteMeta("/blog").robots).toBe("noindex, follow");
    expect(getRouteMeta("/missing").robots).toBe("noindex, nofollow");
  });

  it("canonicalizes the legacy team alias", () => {
    expect(getRouteMeta("/teams").canonicalPath).toBe("/team");
  });
});
