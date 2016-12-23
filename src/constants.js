import path from 'path';

constants.HOME_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
constants.FILES_PATH = `${path.resolve(constants.HOME_PATH, './anote/files')}`;
constants.DB_PATH = `${path.resolve(constants.HOME_PATH, './anote/dbs')}`;
constants.TMP_FILES_PATH = `${path.resolve(constants.HOME_PATH, './anote/tmp_files')}`;
constants.TMP_IMAGE_PATH = `${path.resolve(__dirname, '../tmp/tmp.jpeg')}`;

export default constants;
