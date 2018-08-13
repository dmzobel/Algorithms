function levenshteinDistance(str1, str2) {
  var editsTable = [];
  for (var i = 0; i < str1.length + 1; i++) {
    var tableRow = [i];
    for (var j = 1; j < str2.length + 1; j++) {
      if (i === 0) tableRow.push(j);
      else {
        if (str1[i - 1] === str2[j - 1]) {
          var diagonal = editsTable[i - 1][j - 1];
          tableRow.push(diagonal);
        } else {
          var minNeighbor = Math.min(
            editsTable[i - 1][j],
            editsTable[i - 1][j - 1],
            tableRow[j - 1]
          );
          tableRow.push(1 + minNeighbor);
        }
      }
    }
    editsTable.push(tableRow);
  }

  return editsTable[str1.length][str2.length];
}

levenshteinDistance('abc', 'yabd');
