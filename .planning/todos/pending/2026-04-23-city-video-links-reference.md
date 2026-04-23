---
created: 2026-04-23T12:07:00+01:00
title: City Video Links Reference
area: general
files:
  - src/data.js
---

## Problem

The user requested a list of all YouTube video links used for the city backgrounds in the Dalil Bike website for reference.

## Solution

The following links are currently configured in `src/data.js`:

| City | YouTube Link | Video ID |
| :--- | :--- | :--- |
| **Marrakech** | [Watch on YouTube](https://www.youtube.com/watch?v=WGoSnw5Y3nE) | `WGoSnw5Y3nE` |
| **Fez** | [Watch on YouTube](https://www.youtube.com/watch?v=kYxBn98X3Ig) | `kYxBn98X3Ig` |
| **Casablanca** | [Watch on YouTube](https://www.youtube.com/watch?v=BDqAcVIRqXc) | `BDqAcVIRqXc` |
| **Chefchaouen** | [Watch on YouTube](https://www.youtube.com/watch?v=4CQ0irysD8s) | `4CQ0irysD8s` |
| **Rabat** | [Watch on YouTube](https://www.youtube.com/watch?v=6gVdAWDf0G0) | `6gVdAWDf0G0` |
| **Meknes** | [Watch on YouTube](https://www.youtube.com/watch?v=8t0O0VjmJtQ) | `8t0O0VjmJtQ` |
| **Tangier** | [Watch on YouTube](https://www.youtube.com/watch?v=qGUwPoOuFuA) | `qGUwPoOuFuA` |
| **Essaouira** | [Watch on YouTube](https://www.youtube.com/watch?v=joRZxY4gcyQ) | `joRZxY4gcyQ` |
| **Agadir** | [Watch on YouTube](https://www.youtube.com/watch?v=6GME_pODsJQ) | `6GME_pODsJQ` |
| **Ouarzazate & Merzouga** | [Watch on YouTube](https://www.youtube.com/watch?v=485DQw5_ZRo) | `485DQw5_ZRo` |

## Local High-Quality Videos

To improve video quality and performance, you can download the videos and place them in the project's local storage. The `CityMedia` component is already configured to prioritize local files if they exist.

### Where to put the files
Place your `.mp4` video files in the following directory:
`public/videos/`

### Filename Mapping
Ensure the filenames match the `videoPath` defined in `src/data.js`:
- Marrakech: `marrakech.mp4`
- Fez: `fes.mp4`
- Casablanca: `casablanca.mp4`
- Chefchaouen: `chefchaouen.mp4`
- Rabat: `rabat.mp4`
- Meknes: `meknes.mp4`
- Tangier: `tangier.mp4`
- Essaouira: `essaouira.mp4`
- Agadir: `agadir.mp4`
- Ouarzazate & Merzouga: `ouarzazate.mp4`
