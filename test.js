const convertXmlToJson = (xmlData) => {
    let jsonData = null;

    parseString(xmlData, (err, result) => {
        if (!err) {
            jsonData = result;
        } else {
            console.error('Error parsing XML:', err);
        }
    });

    return jsonData;
};
