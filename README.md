# Variant Search

## Assignment

Create a web application that allows a user to search for genomic variants by gene name and display the results in a tabular view.

## Features

1. Allow the user to enter a gene name to search for variants in that gene. Display the results in a table that shows various attributes associated with each genomic variant.

2. Provide an auto-suggest feature for entering the gene name.

3. Provide two RESTful endpoints supporting the functionality listed in steps 1 and 2.

## Datasource

A zipped TSV file of variants is available in /data/variants.tsv.zip. Each row in the TSV file represents a genomic variant and contains a Gene column with the gene name. A variant will belong to one and only one gene, but multiple variants may belong to the same gene.

## Instructions
To run:
1. `npm install` in your terminal
2. mysql.server start` to start up sql server
3. mysql -u root < database/schema.sql` to import schema
4. npm run server` to start server
5. npm run start` to start client

Test options
1. `npm run storybook`
2. `npm run test`
