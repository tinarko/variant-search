# Variant Search

A web application that allows a user to search for genomic variants by gene name and display the results in a tabular view.

## Features

1. Allow the user to enter a gene name to search for variants in that gene. Display the results in a table that shows various attributes associated with each genomic variant.

2. Provide an auto-suggest feature for entering the gene name.

3. Provide two RESTful endpoints supporting the functionality listed in steps 1 and 2.

## Datasource

A zipped TSV file of variants is available in /data/variants.tsv.zip. Each row in the TSV file represents a genomic variant and contains a Gene column with the gene name. A variant will belong to one and only one gene, but multiple variants may belong to the same gene.

## Instructions
To run:
1. `npm install` in your terminal
2. `mysql.server start` to use sql database
3. `mysql -u root < database/schema.sql` to import schema
4. `npm run server` to start server
5. `npm run start` in a new terminal tab to start client

Test options
1. `npm run storybook`
2. `npm run test`

## To dos / Future improvements...
- add server unit tests
- add more stuff to database by writing a python script... currently only part of the datasource is represented
- beautify auto-suggest feature
- one day: figure out how to cache stuff in the server so that the auto-suggest feature uses gene-cache 
- add expand / collapse option to "nucleotide change" column
- deploy
