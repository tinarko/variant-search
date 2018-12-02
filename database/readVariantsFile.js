var fs = require('fs-extra');

var file = '../data/variants.tsv';

var outputFile = '../data/test.txt';

function getFileLines(fileName) {
  const content = fs.readFileSync(fileName).toString();
  return content.split('\n');
}

var fileLines = getFileLines(file);
var headers = fileLines.shift();

function writeFile(outputFileName, fileLines) {

  let content = fileLines.reduce((str, line) => {
    return str + `(\'${line.split('\t').join("','")}\'),\n`;
  }, '');

  return fs.outputFile(outputFileName, schemaStarter + content + ';');
}

const schemaStarter = `

DROP DATABASE IF EXISTS invitae;

CREATE DATABASE invitae;

USE invitae;

CREATE TABLE IF NOT EXISTS variants (
    'Gene' VARCHAR(10) CHARACTER SET utf8,
    'Nucleotide_Change' VARCHAR(58) CHARACTER SET utf8,
    'Protein_Change' VARCHAR(29) CHARACTER SET utf8,
    'Other_Mappings' VARCHAR(849) CHARACTER SET utf8,
    'Alias' VARCHAR(69) CHARACTER SET utf8,
    'Transcripts' VARCHAR(456) CHARACTER SET utf8,
    'Region' VARCHAR(29) CHARACTER SET utf8,
    'Reported_Classification' VARCHAR(44) CHARACTER SET utf8,
    'Inferred_Classification' VARCHAR(52) CHARACTER SET utf8,
    'Source' VARCHAR(7) CHARACTER SET utf8,
    'Last_Evaluated' DATETIME,
    'Last_Updated' DATETIME,
    'URL' VARCHAR(49) CHARACTER SET utf8,
    'Submitter_Comment' VARCHAR(107) CHARACTER SET utf8,
    'Assembly' VARCHAR(6) CHARACTER SET utf8,
    'Chr' VARCHAR(2) CHARACTER SET utf8,
    'Genomic_Start' VARCHAR(9) CHARACTER SET utf8,
    'Genomic_Stop' VARCHAR(9) CHARACTER SET utf8,
    'Ref' VARCHAR(11) CHARACTER SET utf8,
    'Alt' VARCHAR(13) CHARACTER SET utf8,
    'Accession' VARCHAR(12) CHARACTER SET utf8,
    'Reported_Ref' VARCHAR(11) CHARACTER SET utf8,
    'Reported_Alt' VARCHAR(13) CHARACTER SET utf8
);

INSERT INTO variants VALUES

`;


writeFile(outputFile, fileLines);
