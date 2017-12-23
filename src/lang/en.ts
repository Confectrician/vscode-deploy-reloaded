/**
 * This file is part of the vscode-deploy-reloaded distribution.
 * Copyright (c) Marcel Joachim Kloubert.
 * 
 * vscode-deploy-reloaded is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU Lesser General Public License as   
 * published by the Free Software Foundation, version 3.
 *
 * vscode-deploy-reloaded is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { Translation } from '../i18';


// english
// 
// Translated by: Marcel Joachim Kloubert (https://github.com/mkloubert)
export const translation: Translation = {
    cancel: "Cancel",
    canceled: "Canceled",
    changelog: "Changelog",
    commands: {
        executionError: "Could not execute command{0:surround,leading_space}:{1:trim,surround,leading_space}",
        scriptNotFound: "{0:surround} script not found!",
    },
    compare: {
        currentFile: {
            description: "Compares the current file with a remote one",
            failed: "Could not compare current file:{0:trim,surround,leading_space}",
            label: "Current file ...",
        },
        errors: {
            operationFailed: "Compare operation failed (s. debug output 'CTRL + SHIFT + Y')!",
        },
        title: "Diff{0:trim,surround,leading_space}",
    },
    DELETE: {
        askForCancelOperation: "You are about to cancel the delete operation in{0:trim,surround,leading_space}. Are you sure?",
        askIfDeleteLocalFile: "Also delete local file?",
        askIfDeleteLocalFiles: "Also delete local files?",
        buttons: {
            cancel: {
                text: "Deleting files in{0:trim,surround,leading_space} ...",
                tooltip: "Click here to cancel ...",
            },
        },
        cancelling: "Cancelling delete operation ...",
        currentFile: {
            description: "Deletes the current file",
            label: "Current file ...",
        },
        deletingFile: "Deleting file{0:trim,surround,leading_space} in{1:trim,surround,leading_space} ...",
        errors: {
            invalidWorkspace: "File{0:trim,surround,leading_space} is not part of workspace{1:trim,surround,leading_space}!",
            invalidWorkspaceForPackage: "Package{0:trim,surround,leading_space} is not part of workspace{1:trim,surround,leading_space}!",
            operationFailed: "Delete operation failed (s. debug output 'CTRL + SHIFT + Y')!",
        },
        finishedOperation: "Deleting files in{0:trim,surround,leading_space} has been finished.",
        finishedOperationWithErrors: "[ERROR] Could not delete files in{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        package: {
            description: "Deletes the files of a package",
            label: "Package ...",
        },
        selectTarget: "Select the target where to delete ...",
        startOperation: "Start deleting files in{0:trim,surround,leading_space} ...",
    },
    deploy: {
        currentFile: {
            description: "Deploys the current file",
            label: "Current file ...",
        },
        errors: {
            operationFailed: "Deploy operation failed (s. debug output 'CTRL + SHIFT + Y')!",
        },
        onChange: {
            failed: "Deploy on change from{0:trim,surround,leading_space} to{1:trim,surround,leading_space} failed:{2:trim,surround,leading_space}",
        },
        onSave: {
            failed: "Deploy on save from{0:trim,surround,leading_space} to{1:trim,surround,leading_space} failed:{2:trim,surround,leading_space}",
        },
        package: {
            description: "Deploys the files of a package",
            label: "Package ...",
        },
    },
    disposeNotAllowed: "Cannot invoke 'dispose()' method!",
    documents: {
        html: {
            defaultName: "HTML document #{0:trim}",
        },
    },
    editors: {
        active: {
            noOpen: "No active text editor found!",
        },
    },
    error: "ERROR:{0:trim,surround,leading_space}",
    file: "File",
    files: "Files",
    ftp: {
        couldNotConnect: "Could not start connection!",
        couldNotConnectWithJSFTP: "Could not start connection via 'jsftp'!",
    },
    http: {
        errors: {
            client: "HTTP client error{0:trim,leading_space}:{1:trim,surround,leading_space}",
            protocolNotSupported: "The protocol{0:trim,surround,leading_space} is not supported!",
            maxRedirections: "Maximum number of redirections ({0:trim}) reached!",
            noRedirectLocation: "No location defined to redirect to!",
            server: "HTTP server error{0:trim,leading_space}:{1:trim,surround,leading_space}",
            unknown: "Unknown HTTP error{0:trim,leading_space}:{1:trim,surround,leading_space}",
        },
    },
    initializationCanceled: 'The initialization of the extension has been stopped.',
    isNo: {
        directory: "{0:trim,surround,ending_space}is no directory!",
        file: "{0:trim,surround,ending_space}is no file!",
    },
    listDirectory: {
        currentDirectory: "Current directory:{0:trim,surround,leading_space} ({1:trim,surround})",
        directoryIsEmpty: "(directory is empty)",
        lastModified: "Last modified:{0:trim,leading_space}",
        loading: "Loading directory{0:trim,surround,leading_space} ({1:trim} / {2:trim})...",
        noName: "<NO NAME>",
        parentDirectory: "(parent)",
        size: "Size:{0:trim,leading_space}",
    },
    maxDepthReached: "Cannot go deeper than{0:trim,leading_space}!",
    no: "No",
    noFiles: "No files found!",
    ok: 'OK',
    packages: {
        buttons: {
            defaultText: "Deploy package{0:trim,surround,leading_space}",
            defaultTooltip: "Click here to start deployment...",
        },
        defaultName: "(Package #{0:trim})",
        deploymentFailed: "Could not deploy package{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        noneFound: "No packages found!",
        selectPackage: "Select a package ...",
        virtualTarget: "Virtual target for package{0:trim,surround,leading_space}",
    },
    plugins: {
        list: {
            defaultEntryName: "(Entry #{0:trim})",
            selectEntry: "Select the entry with settings to use for deployment...",
        },
        local: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        mail: {
            subject: "Deployed files",
            text: "Your deployed files (s. attachment).\n\n" + 
                  "Send by 'Deploy Reloaded' (vscode-deploy-reloaded) Visual Studio Code extension:\n" + 
                  "https://github.com/mkloubert/vscode-deploy-reloaded",
        },
        prompt: {
            validation: {
                noBool: "Please enter a valid boolean value!",
                noFloat: "Please enter a valid number (english format)!",
                noInt: "Please enter a valid integer value!",
                noJSON: "Please enter a valid, JavaScript compatible, JSON string!",
            },
        },
        script: {
            noScriptFunction: "Script{0:trim,surround,leading_space} does not contain an 'execute' function!",
            noScriptModule: "Script{0:trim,surround,leading_space} does not contain a module!",
            scriptNotFound: "Script{0:trim,surround,leading_space} not found!",
        },
        switch: {
            button: {
                text: "Switch{0:trim,surround,leading_space}",
                tooltip: "Current option:{0:trim,surround,leading_space}\n\nClick here to change the current option...",
            },
            changeSwitch: {
                description: "Changes the current option of a switch",
                label: "Change switch ...",
            },
            defaultOptionName: "Switch option #{0:trim}",
            noDefined: 'No swicthes available!',
            noOptionsDefined: 'No options were defined for the switch{0:trim,surround,leading_space}!',
            noOptionSelected2: "No option has been selected or defined for switch{0:trim,surround,leading_space}!",
            noOptionSelected: "NO OPTION SELECTED",
            selectOption: "Select an option for the switch{0:trim,surround,leading_space}...",
            selectSwitch: "Select a switch...",
        },
        test: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        zip: {
            errors: {
                fileAlreadyExists: "File{0:trim,surround,leading_space} already exists!",
                fileNotFound: "File{0:trim,surround,leading_space} not found!",
                noFilesFound: "No ZIP files found!",
            },
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
    },
    pull: {
        askForCancelOperation: "You are about to cancel the pull operation from{0:trim,surround,leading_space}. Are you sure?",
        buttons: {
            cancel: {
                text: "Pulling files from{0:trim,surround,leading_space} ...",
                tooltip: "Click here to cancel ...",
            },
        },
        cancelling: "Cancelling pull operation ...",
        errors: {
            invalidWorkspace: "Cannot pull file{0:trim,surround,leading_space} to workspace{1:trim,surround,leading_space}!",
            invalidWorkspaceForPackage: "Cannot pull package{0:trim,surround,leading_space} to workspace{1:trim,surround,leading_space}!",
            operationFailed: "Pull operation failed (s. debug output 'CTRL + SHIFT + Y')!",
        },
        finishedOperation: "Pulling files from{0:trim,surround,leading_space} has been finished.",
        finishedOperationWithErrors: "[ERROR] Could not pull files from{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        pullingFile: "Pulling file{0:trim,surround,leading_space} from {1:trim,surround,leading_space} ...",
        selectSource: "Select the source from where to pull from ...",
        startOperation: "Start pulling files from{0:trim,surround,leading_space} ...",
    },
    s3bucket: {
        credentialTypeNotSupported: "Credental type{0:trim,surround,leading_space} is not supported!",
    },
    sftp: {
        privateKeyNotFound: "Private key file{0:trim,surround,leading_space} not found!",
    },
    sql: {
        notSupported: "SQL type{0:trim,surround,leading_space} is not supported!",
    },
    targets: {
        atLeastOneNotFound: "At least one target was not found!",
        cannotDefineOtherAsSource: "Cannot use target{0:trim,surround,leading_space}!",
        defaultName: "(Target #{0:trim})",
        doesNotExist: "Target{0:trim,surround,leading_space} does not exist!",
        errors: {
            couldNotLoadDataTransformer: "Could not load data transformer for{0:trim,surround,leading_space}!",
        },
        noneFound: "No targets found!",
        noPluginsFound: "No matching plugins found!",
        noWorkspaceFound: "No matching workspace found!",
        operations: {
            http: {
                bodyScriptNotFound: "Script{0:trim,surround,leading_space} not found!",
                noBodyScriptFunction: "Script{0:trim,surround,leading_space} does not contain a 'getBody' function!",
                noBodyScriptModule: "Script{0:trim,surround,leading_space} does not contain a module!",
            },
            script: {
                noScriptFunction: "Script{0:trim,surround,leading_space} does not contain an 'execute' function!",
                noScriptModule: "Script{0:trim,surround,leading_space} does not contain a module!",
                scriptNotFound: "Script{0:trim,surround,leading_space} not found!",
            },
            typeNotSupported: "Operation type{0:trim,surround,leading_space} is not supported!",
        },
    },
    time: {
        dateTimeWithSeconds: "YYYY-MM-DD HH:mm:ss",
    },
    tools: {
        createDeployScript: {
            askForNewTargetName: "Please define the name of the new target ...",
            askForScriptPath: "What should be the path of the new file?",
            askForUpdatingSettings: "Save script as new target in settings?",
            description: "Creates a basic script for deploying files",
            errors: {
                targetAlreadyDefined: "A target called{0:trim,surround,leading_space} has already been defined in the settings!",
                updateTargetSettingsFailed: "Could not write new script target entry to settings:{0:trim,surround,leading_space}",
            },
            label: "Create deploy script ...",
            scriptCreated: "The script{0:trim,surround,leading_space} has been created successfully.",
        },
        createDeployOperationScript: {
            askForNewOperationName: "Enter an optional display name for the new operation ...",
            askForOperationType: {
                afterDeployment: "After deployment",
                beforeDeploy: "Before deployment starts",
                placeHolder: "When should the script be executed?",
            },
            askForScriptPath: "What should be the path of the new file?",
            askForUpdatingSettings: "Save script in settings?",
            description: "Creates a basic script for a deploy operation",
            errors: {
                updateSettingsFailed: "Could not write new script to settings:{0:trim,surround,leading_space}",
            },
            label: "Create deploy operation script ...",
            scriptCreated: "The script{0:trim,surround,leading_space} has been created successfully.",
            selectTarget: "Select a target ...",
        },
        errors: {
            operationFailed: "Tool operation failed (s. debug output 'CTRL + SHIFT + Y')!",
        },
        quickExecution: {
            description: "Executes JavaScript code",
            errors: {
                failed: "Execution code failed:{0:trim,surround,leading_space}",
            },
            help: {
                title: "'Quick execution' help",
            },
            inputCode: "Input the code, you would like to execute ($help e.g.) ...",
            label: "Quick code execution ...",
            result: {
                title: "'Quick execution' result",
            },
        },
        showPackageFiles: {
            description: "Displays the files of a package",
            label: "Show package files ...",
            title: "Files of package{0:trim,surround,leading_space}",
        },
    },
    'vs-deploy': {
        continueAndInitialize: 'Continue and initialize me...',
        currentlyActive: "'vs-deploy' extension is currently active. It is recommended to DEACTIVATE IT, before you continue and use the new extension!",
    },
    warning: 'WARNING',
    workspace: "Workspace",
    workspaces: {
        errors: {
            cannotDetectMappedPathInfoForFile: "Cannot detect mapped path information for file{0:trim,surround,leading_space}!",
            cannotDetectPathInfoForFile: "Cannot detect path information for file{0:trim,surround,leading_space}!",
            cannotUseTargetForFile: "Cannot use target{0:trim,surround,leading_space} for file{1:trim,surround,leading_space}!",
        },
        noneFound: "No workspaces found!",
        selectWorkspace: "Select a workspace ...",
    },
    yes: 'Yes',
}
