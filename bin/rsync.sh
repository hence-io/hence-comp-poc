#!/usr/bin/env bash

rsync -azhv --stats --exclude-from './bin/exclude.txt' ./components/* ./bower_components
