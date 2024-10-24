
const fs = require('fs');
const path = require('path');
const uploadSingleFileService = async (fileObject) => {
    // set up dir to save file in server
    let cusPath = "../public/images/upload"



    // merge current dir and folder which will has contain file in server
    let setPath = path.resolve(__dirname, cusPath)

    // validate path
    if (!fs.existsSync(setPath)) {
        fs.mkdirSync(setPath);
    }

    // take extend name in file
    let typeExtName = path.extname(fileObject.name);

    // take base name in file
    let baseFileName = path.basename(fileObject.name, typeExtName);


    // setup final name
    let finalName = `image-${baseFileName}-${Date.now()}${typeExtName}` // ` is backsick: dùng để nối chuỗi

    // setup upload path with final name
    let uploadPath = setPath + '/' + finalName;
    console.log(uploadPath)
    // Use the mv() method to place the file somewhere on your server
    // promise: try{}catch(e){} or .then{}.catch{}
    try {
        await fileObject.mv(uploadPath)
        return ({
            status: 200,
            message: 'File uploaded!',
            data: {
                path: uploadPath,
                name: fileObject.name,
                mimetype: fileObject.mimetype,
                size: fileObject.size
            }
        })
    } catch (e) {
        return ({
            status: 500,
            message: 'File upload failed',
            data: {
                name: fileObject.name,
                mimetype: fileObject.mimetype,
                size: fileObject.size
            },
            error: JSON.stringify(e),
        })
    }

    // //callback
    // fileObject.mv(uploadPath, function (err) {
    //     if (err) {
    //         console.log('>>> check err', err)
    //         return ({
    //             status: 500,
    //             message: 'File upload failed',
    //             data: {
    //                 name: fileObject.name,
    //                 mimetype: fileObject.mimetype,
    //                 size: fileObject.size
    //             }
    //         })

    //     }
    //     return ({
    //         status: 200,
    //         message: 'File uploaded!',
    //         data: {
    //             name: fileObject.name,
    //             mimetype: fileObject.mimetype,
    //             size: fileObject.size
    //         }
    //     })
    // });
}

const uploadNewMultipleFilesService = async (fileArray) => {
    let resultArr = [];
    let countSuccess = 0;
    let cusPath = "/Users/hungdv-mac/Desktop/DBAStudyCode/Backend/BasicBackend/src/public/images/upload/"
    //validate folder exist
    if (!fs.existsSync(cusPath)) {
        fs.mkdirSync(cusPath);
    }
    try {
        for (let i = 0; i < fileArray.length; i++) {
            let nameFIle = `image-${Date.now()}--${fileArray[i].name}`
            let uploadPath = cusPath + nameFIle;
            try {
                await fileArray[i].mv(uploadPath);
                resultArr.push({
                    status: 200,
                    message: 'File uploaded!',
                    path: cusPath,
                    name: fileArray[i].name,
                })
                countSuccess++;
            } catch (e) {
                resultArr.push({
                    status: 500,
                    message: 'File upload failed',
                    error: JSON.stringify(e),
                })
            }
        }
        return ({
            countSuccess: countSuccess,
            resultArr: resultArr,
        })
    } catch (e) {
        console.log(e)
        return ({
            status: 500,
            message: 'File upload failed',
            error: JSON.stringify(e),
        })
    }
}

module.exports = { uploadSingleFileService, uploadNewMultipleFilesService }