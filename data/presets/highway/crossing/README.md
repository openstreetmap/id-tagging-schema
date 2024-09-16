# About the crossing presets

## General

These presets use fields `@templates` to make sure all have a similar structure.
Some presets like `traffic_signals` have additinal fields and use a different field order.
Try to keep the file structure very similar so they can be easily compared.

## nodes `highway=crossing + crossing=*`

Crossing nodes are handel by `highway/crossing.json` + `highway/crossing/*.json` (as geometry type `vertex`).

Crossing nodes and crossing ways have a big overlap.
However, there are a few tags that should _only_ be expected on the crossing node. When crossing ways are present, this also means there are separate ways attached with additional nodes that hald the

There are places in OSM that follow a different tagging style where only crossing ways are used (without the vertex nodes). Those regions might have other conventions on where to place

## ways `highway=footway|cycleway|path + *=crossing + crossing=*`

Crossing way presets are duplicated per highway class:
- `/highway/footway/crossing.json`  + `/highway/footway/crossing/*.json`
- `/highway/cycleway/crossing.json` + `/highway/cycleway/crossing/*.json`
- `/highway/path/crossing.json`     + `/highway/path/crossing/*.json`

The crossing presets for `/cycleway*` and `/path*` are considered to be relevant for bike traffic and have additional fields that target bike vs. foot traffic.
