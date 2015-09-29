#!/usr/bin/env bash

cd components

cd hence-card && gulp build && cd ..
cd hence-html && gulp build && cd ..
cd hence-flight-checkin && gulp build && cd ..

cd ..
. bin/rsync.sh
gulp
