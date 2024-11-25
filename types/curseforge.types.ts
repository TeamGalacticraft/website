export interface CurseforgeResult {
  data: Curseforge;
}

export interface Curseforge {
  id: number;
  gameId: number;
  name: string;
  slug: string;
  links: CurseforgeLinks;
  summary: string;
  status: number;
  downloadCount: number;
  isFeatured: boolean;
  primaryCategoryId: number;
  categories: CurseforgeCategory[];
  classId: number;
  authors: CurseforgeAuthor[];
  logo: CurseforgeLogo;
  screenshots: CurseforgeScreenshot[];
  mainFileId: number;
  latestFiles: File[];
  latestFilesIndexes: CurseforgeFileIndex[];
  latestEarlyAccessFilesIndexes: any[];
  dateCreated: string;
  dateModified: string;
  dateReleased: string;
  allowModDistribution: boolean;
  gamePopularityRank: number;
  isAvailable: boolean;
  hasCommentsEnabled: boolean;
  thumbsUpCount: number;
}

interface CurseforgeLinks {
  websiteUrl: string;
  wikiUrl: string;
  issuesUrl: string;
  sourceUrl: string;
}

interface CurseforgeCategory {
  id: number;
  gameId: number;
  name: string;
  slug: string;
  url: string;
  iconUrl: string;
  dateModified: string;
  isClass: boolean;
  classId: number;
  parentCategoryId: number;
}

interface CurseforgeAuthor {
  id: number;
  name: string;
  url: string;
  avatarUrl: string;
}

interface CurseforgeLogo {
  id: number;
  modId: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  url: string;
}

interface CurseforgeScreenshot {
  id: number;
  modId: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  url: string;
}

interface CurseforgeFile {
  id: number;
  gameId: number;
  modId: number;
  isAvailable: boolean;
  displayName: string;
  fileName: string;
  releaseType: number;
  fileStatus: number;
  hashes: CurseforgeHash[];
  fileDate: string;
  fileLength: number;
  downloadCount: number;
  downloadUrl: string;
  gameVersions: string[];
  sortableGameVersions: CurseforgeSortableGameVersion[];
  dependencies: CurseforgeDependency[];
  alternateFileId: number;
  isServerPack: boolean;
  fileFingerprint: number;
  modules: CurseforgeModule[];
}

interface CurseforgeHash {
  value: string;
  algo: number;
}

interface CurseforgeSortableGameVersion {
  gameVersionName: string;
  gameVersionPadded: string;
  gameVersion: string;
  gameVersionReleaseDate: string;
  gameVersionTypeId: number;
}

interface CurseforgeDependency {
  modId: number;
  relationType: number;
}

interface CurseforgeModule {
  name: string;
  fingerprint: number;
}

interface CurseforgeFileIndex {
  gameVersion: string;
  fileId: number;
  filename: string;
  releaseType: number;
  gameVersionTypeId: number;
  modLoader: number;
}
