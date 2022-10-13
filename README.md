# web-vitamin-demo-projects

# Google drive as BE

Action Script:

```js

function myFunction() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Games');
  const rows = sheet.getDataRange().getValues();

  let gamesList = [];
  let header = rows[0];

  for (let i = 1; i < rows.length; i++) {
    let game = {};

    for (j = 0; j < header.length; j++) {
      game[header[j]] = rows[i][j];
    }

    gamesList.push(game);
  }
  Logger.log(gamesList);

  writeToExistingFile(gamesList);
}

/**
 * Writes the data to an existing file.
 * The file must exist and be shared.
 */
function writeToExistingFile(data) {
  const content = JSON.stringify(data);
  const fileId = '1U2VkKfG0w8V9iMLCN-u_99Kc_xBbFFS9';
  var file = DriveApp.getFileById(fileId).setContent(content);
};

/**
 * Creates a new file.
 * If the file is larger than 10MB throws exception.
 */
function createGoogleDriveTextFile() {
  const fileName = "Test";
  const content = "Testing"
  DriveApp.createFolder('Work').createFolder('FE Test').createFile(fileName, content, MimeType.JAVASCRIPT)
}

```