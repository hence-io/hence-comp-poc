#!/usr/bin/env bash

cd components

cd hence-user-card
gulp build
cd ..

cd ..
. bin/rsync.sh
gulp
