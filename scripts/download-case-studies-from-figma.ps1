# Downloads the 4 case study card images from Figma (section node 2016:10428).
# Requires: $env:FIGMA_ACCESS_TOKEN (Personal access token from Figma Settings → Security)
#
# Usage:
#   $env:FIGMA_ACCESS_TOKEN = "figd_..."
#   .\scripts\download-case-studies-from-figma.ps1

$ErrorActionPreference = "Stop"

$fileKey = "diyh4TOagDKhBnB4P3tSdl"
$outDir = Join-Path $PSScriptRoot "..\public\images\case-studies"

$assets = [ordered]@{
  "saas-expansion.jpg" = "2016:10430"
  "real-estate.jpg"    = "2063:812"
  "retail.jpg"         = "2016:10502"
  "investor.jpg"       = "2016:10538"
}

if (-not $env:FIGMA_ACCESS_TOKEN) {
  Write-Error "Set FIGMA_ACCESS_TOKEN first (Figma → Settings → Security → Personal access tokens)."
}

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$ids = ($assets.Values -join ",")
$encodedIds = [uri]::EscapeDataString($ids)
$url = "https://api.figma.com/v1/images/$fileKey?ids=$encodedIds&format=jpg&scale=2"

Write-Host "Requesting export URLs from Figma..."
$response = Invoke-RestMethod -Uri $url -Headers @{ "X-Figma-Token" = $env:FIGMA_ACCESS_TOKEN }

if ($response.err) {
  Write-Error "Figma API error: $($response.err)"
}

foreach ($entry in $assets.GetEnumerator()) {
  $fileName = $entry.Key
  $nodeId = $entry.Value
  $imageUrl = $response.images.$nodeId

  if (-not $imageUrl) {
    Write-Warning "No URL for $nodeId ($fileName)"
    continue
  }

  $dest = Join-Path $outDir $fileName
  Invoke-WebRequest -Uri $imageUrl -OutFile $dest -UseBasicParsing
  Write-Host "Saved $fileName"
}

Write-Host "Done. Images written to $outDir"
