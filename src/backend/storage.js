import { storage } from "./backendConfig";
import { ID } from "appwrite";

const st = {};

const buckets = [
  {
    id: import.meta.env.VITE_BUCKET1_ID,
    name: "bucket1",
  },
];

buckets.forEach((col) => {
  st[col.name] = {
    upload: (
      file,
      readPermissions = [],
      writePermissions = [],
      id = ID.unique()
    ) =>
      storage.createFile(col.id, id, file, readPermissions, writePermissions),

    delete: (fileId) => storage.deleteFile(col.id, fileId),

    list: (queries = [], search) => storage.listFiles(col.id, queries, search),

    get: (fileId) => storage.getFile(col.id, fileId),

    getPreview: (fileId, options = {}) =>
      storage.getFilePreview(col.id, fileId, "200", "200"),

    download: (fileId) => storage.getFileDownload(col.id, fileId),
  };
});

export default st;
