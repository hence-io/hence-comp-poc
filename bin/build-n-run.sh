#!/usr/bin/env bash

cd components

cd hence-card
gulp build
cd ..

#cd hence-event
#gulp build
#cd ..
#
#cd hence-event-card
#gulp build
#cd ..

cd hence-product
gulp build
cd ..

cd hence-product-card
gulp build
cd ..

cd hence-user
gulp build
cd ..

cd hence-user-card
gulp build
cd ..

cd hence-user-biography
gulp build
cd ..

cd ..
. bin/rsync.sh

gulp
