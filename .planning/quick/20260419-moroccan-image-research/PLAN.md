# Plan: Research into Moroccan Heritage & Hospitality Images

Research and source 5+ high-resolution (1920x1080+), authentic images for 10 hotels and 10 landmarks across Morocco. The output will be a JSON asset map at `assets/data/image-map.json` with direct URLs and attributions.

## User Review Required

- **Hotlinking vs. Local Hosting**: This task is to create a map of URLs. remote URLs are more fragile than local ones.
- **Source Selection**: Wikimedia Commons will be the primary source.

## Implementation Steps

### Phase 1: Research & Sourcing
I will perform a systematic search for each of the 20 locations:
1.  **Search**: Use Wikimedia Commons MediaSearch or dedicated search tools for each site.
2.  **Filter**: Pick images with resolution >= 1920x1080.
3.  **Attrib**: Capture the direct file URL and the author/license info.

### Phase 2: JSON Construction
1.  Initialize the JSON file with the 20 location keys.
2.  Populate each key with an array of objects: `{ url, source, attribution }`.

### Phase 3: Verification
1.  Verify that a sample of the URLs are publicly accessible.
2.  Check for consistency in image quality and style (authentic Moroccan architecture).
