/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as stream from 'stream';
import * as models from '../models';


/**
 * @class
 * FileSystem
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the DataLakeStoreFileSystemManagementClient.
 */
export interface FileSystem {

    /**
     * Appends to the specified file. This method supports multiple concurrent
     * appends to the file. NOTE: Concurrent append and normal (serial) append
     * CANNOT be used interchangeably. Once a file has been appended to using
     * either append option, it can only be appended to using that append option.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} filePath The Data Lake Store path (starting with '/') of
     * the file to which to append using concurrent append.
     * 
     * @param {object} streamContents The file contents to include when appending
     * to the file.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appendMode] Indicates the concurrent append call
     * should create the file if it doesn't exist or just open the existing file
     * for append. Possible values include: 'autocreate'
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    concurrentAppend(accountName: string, filePath: string, streamContents: stream.Readable, options: { appendMode? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    concurrentAppend(accountName: string, filePath: string, streamContents: stream.Readable, callback: ServiceCallback<void>): void;

    /**
     * Checks if the specified access is available at the given path.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} path The Data Lake Store path (starting with '/') of the
     * file or directory for which to check access.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.fsaction] File system operation read/write/execute
     * in string form, matching regex pattern '[rwx-]{3}'
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    checkAccess(accountName: string, path: string, options: { fsaction? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    checkAccess(accountName: string, path: string, callback: ServiceCallback<void>): void;

    /**
     * Creates a directory.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} path The Data Lake Store path (starting with '/') of the
     * directory to create.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    mkdirs(accountName: string, path: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileOperationResult>): void;
    mkdirs(accountName: string, path: string, callback: ServiceCallback<models.FileOperationResult>): void;

    /**
     * Concatenates the list of source files into the destination file, removing
     * all source files upon success.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} destinationPath The Data Lake Store path (starting with
     * '/') of the destination file resulting from the concatenation.
     * 
     * @param {array} sources A list of comma seperated Data Lake Store paths
     * (starting with '/') of the files to concatenate, in the order in which
     * they should be concatenated.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    concat(accountName: string, destinationPath: string, sources: string[], options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    concat(accountName: string, destinationPath: string, sources: string[], callback: ServiceCallback<void>): void;

    /**
     * Concatenates the list of source files into the destination file, deleting
     * all source files upon success. This method accepts more source file paths
     * than the Concat method. This method and the parameters it accepts are
     * subject to change for usability in an upcoming version.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} msConcatDestinationPath The Data Lake Store path (starting
     * with '/') of the destination file resulting from the concatenation.
     * 
     * @param {object} streamContents A list of Data Lake Store paths (starting
     * with '/') of the source files. Must be in the format: sources=<comma
     * separated list>
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {boolean} [options.deleteSourceDirectory] Indicates that as an
     * optimization instead of deleting each individual source stream, delete the
     * source stream folder if all streams are in the same folder instead. This
     * results in a substantial performance improvement when the only streams in
     * the folder are part of the concatenation operation. WARNING: This includes
     * the deletion of any other files that are not source files. Only set this
     * to true when source files are the only files in the source directory.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    msConcat(accountName: string, msConcatDestinationPath: string, streamContents: stream.Readable, options: { deleteSourceDirectory? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    msConcat(accountName: string, msConcatDestinationPath: string, streamContents: stream.Readable, callback: ServiceCallback<void>): void;

    /**
     * Get the list of file status objects specified by the file path, with
     * optional pagination parameters
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} listFilePath The Data Lake Store path (starting with '/')
     * of the directory to list.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.listSize] Gets or sets the number of items to
     * return. Optional.
     * 
     * @param {string} [options.listAfter] Gets or sets the item or lexographical
     * index after which to begin returning results. For example, a file list of
     * 'a','b','d' and listAfter='b' will return 'd', and a listAfter='c' will
     * also return 'd'. Optional.
     * 
     * @param {string} [options.listBefore] Gets or sets the item or lexographical
     * index before which to begin returning results. For example, a file list of
     * 'a','b','d' and listBefore='d' will return 'a','b', and a listBefore='c'
     * will also return 'a','b'. Optional.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listFileStatus(accountName: string, listFilePath: string, options: { listSize? : number, listAfter? : string, listBefore? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileStatusesResult>): void;
    listFileStatus(accountName: string, listFilePath: string, callback: ServiceCallback<models.FileStatusesResult>): void;

    /**
     * Gets the file content summary object specified by the file path.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} getContentSummaryFilePath The Data Lake Store path
     * (starting with '/') of the file for which to retrieve the summary.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getContentSummary(accountName: string, getContentSummaryFilePath: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ContentSummaryResult>): void;
    getContentSummary(accountName: string, getContentSummaryFilePath: string, callback: ServiceCallback<models.ContentSummaryResult>): void;

    /**
     * Get the file status object specified by the file path.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} getFilePath The Data Lake Store path (starting with '/') of
     * the file or directory for which to retrieve the status.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFileStatus(accountName: string, getFilePath: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileStatusResult>): void;
    getFileStatus(accountName: string, getFilePath: string, callback: ServiceCallback<models.FileStatusResult>): void;

    /**
     * Appends to the specified file. This method does not support multiple
     * concurrent appends to the file. NOTE: Concurrent append and normal
     * (serial) append CANNOT be used interchangeably. Once a file has been
     * appended to using either append option, it can only be appended to using
     * that append option. Use the ConcurrentAppend option if you would like
     * support for concurrent appends.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} directFilePath The Data Lake Store path (starting with '/')
     * of the file to which to append.
     * 
     * @param {object} streamContents The file contents to include when appending
     * to the file.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    append(accountName: string, directFilePath: string, streamContents: stream.Readable, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    append(accountName: string, directFilePath: string, streamContents: stream.Readable, callback: ServiceCallback<void>): void;

    /**
     * Creates a file with optionally specified content.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} directFilePath The Data Lake Store path (starting with '/')
     * of the file to create.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.streamContents] The file contents to include when
     * creating the file. This parameter is optional, resulting in an empty file
     * if not specified.
     * 
     * @param {boolean} [options.overwrite] The indication of if the file should
     * be overwritten.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(accountName: string, directFilePath: string, options: { streamContents? : stream.Readable, overwrite? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    create(accountName: string, directFilePath: string, callback: ServiceCallback<void>): void;

    /**
     * Opens and reads from the specified file.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} directFilePath The Data Lake Store path (starting with '/')
     * of the file to open.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.length]
     * 
     * @param {number} [options.offset]
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    open(accountName: string, directFilePath: string, options: { length? : number, offset? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<stream.Readable>): void;
    open(accountName: string, directFilePath: string, callback: ServiceCallback<stream.Readable>): void;

    /**
     * Sets the Access Control List (ACL) for a file or folder.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} setAclFilePath The Data Lake Store path (starting with '/')
     * of the file or directory on which to set the ACL.
     * 
     * @param {string} aclspec The ACL spec included in ACL creation operations in
     * the format '[default:]user|group|other::r|-w|-x|-'
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    setAcl(accountName: string, setAclFilePath: string, aclspec: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    setAcl(accountName: string, setAclFilePath: string, aclspec: string, callback: ServiceCallback<void>): void;

    /**
     * Modifies existing Access Control List (ACL) entries on a file or folder.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} modifyAclFilePath The Data Lake Store path (starting with
     * '/') of the file or directory with the ACL being modified.
     * 
     * @param {string} aclspec The ACL specification included in ACL modification
     * operations in the format '[default:]user|group|other::r|-w|-x|-'
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    modifyAclEntries(accountName: string, modifyAclFilePath: string, aclspec: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    modifyAclEntries(accountName: string, modifyAclFilePath: string, aclspec: string, callback: ServiceCallback<void>): void;

    /**
     * Removes existing Access Control List (ACL) entries for a file or folder.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} removeAclFilePath The Data Lake Store path (starting with
     * '/') of the file or directory with the ACL being removed.
     * 
     * @param {string} aclspec The ACL spec included in ACL removal operations in
     * the format '[default:]user|group|other'
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    removeAclEntries(accountName: string, removeAclFilePath: string, aclspec: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    removeAclEntries(accountName: string, removeAclFilePath: string, aclspec: string, callback: ServiceCallback<void>): void;

    /**
     * Removes the existing Access Control List (ACL) of the specified file or
     * directory.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} aclFilePath The Data Lake Store path (starting with '/') of
     * the file or directory with the ACL being removed.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    removeAcl(accountName: string, aclFilePath: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    removeAcl(accountName: string, aclFilePath: string, callback: ServiceCallback<void>): void;

    /**
     * Gets Access Control List (ACL) entries for the specified file or directory.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} aclFilePath The Data Lake Store path (starting with '/') of
     * the file or directory for which to get the ACL.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getAclStatus(accountName: string, aclFilePath: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AclStatusResult>): void;
    getAclStatus(accountName: string, aclFilePath: string, callback: ServiceCallback<models.AclStatusResult>): void;

    /**
     * Deletes the requested file or directory, optionally recursively.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} filePath The Data Lake Store path (starting with '/') of
     * the file or directory to delete.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {boolean} [options.recursive] The optional switch indicating if the
     * delete should be recursive
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(accountName: string, filePath: string, options: { recursive? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileOperationResult>): void;
    deleteMethod(accountName: string, filePath: string, callback: ServiceCallback<models.FileOperationResult>): void;

    /**
     * Rename a file or directory.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} renameFilePath The Data Lake Store path (starting with '/')
     * of the file or directory to move/rename.
     * 
     * @param {string} destination The path to move/rename the file or folder to
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    rename(accountName: string, renameFilePath: string, destination: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileOperationResult>): void;
    rename(accountName: string, renameFilePath: string, destination: string, callback: ServiceCallback<models.FileOperationResult>): void;

    /**
     * Sets the owner of a file or directory.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} setOwnerFilePath The Data Lake Store path (starting with
     * '/') of the file or directory for which to set the owner.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.owner] The AAD Object ID of the user owner of the
     * file or directory. If empty, the property will remain unchanged.
     * 
     * @param {string} [options.group] The AAD Object ID of the group owner of the
     * file or directory. If empty, the property will remain unchanged.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    setOwner(accountName: string, setOwnerFilePath: string, options: { owner? : string, group? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    setOwner(accountName: string, setOwnerFilePath: string, callback: ServiceCallback<void>): void;

    /**
     * Sets the permission of the file or folder.
     *
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {string} setPermissionFilePath The Data Lake Store path (starting
     * with '/') of the file or directory for which to set the permission.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.permission] A string representation of the
     * permission (i.e 'rwx'). If empty, this property remains unchanged.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    setPermission(accountName: string, setPermissionFilePath: string, options: { permission? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    setPermission(accountName: string, setPermissionFilePath: string, callback: ServiceCallback<void>): void;
}