# Downloads the 11 industry card header images from Figma (node 2016:10086 grid).
# Requires: $env:FIGMA_ACCESS_TOKEN (Personal access token from Figma Settings → Security)
#
# Usage:
#   $env:FIGMA_ACCESS_TOKEN = "figd_..."
#   .\scripts\download-industries-from-figma.ps1

$ErrorActionPreference = "Stop"

$fileKey = "diyh4TOagDKhBnB4P3tSdl"
$outDir = Join-Path $PSScriptRoot "..\public\images\industries"

$assets = [ordered]@{
  "technology-saas.jpg"                  = "2016:10089"
  "healthcare-life-sciences.jpg"         = "2016:10104"
  "manufacturing-industrial.jpg"         = "2016:10119"
  "banking-financial-services.jpg"       = "2016:10134"
  "consumer-retail.jpg"                  = "2016:10149"
  "automotive.jpg"                       = "2016:10164"
  "consulting-professional-services.jpg" = "2016:10179"
  "education.jpg"                        = "2016:10194"
  "energy-utilities.jpg"                 = "2016:10209"
  "logistics-supply-chain.jpg"           = "2016:10224"
  "telecom-media.jpg"                    = "2016:10239"
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
