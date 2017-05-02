import { here, ITraceLoc, setProjectRoot } from "traceloc";

setProjectRoot(".");

let LOGGING = true;

function log(prompt: string) {
    let loc: ITraceLoc; // Test explicit types are working
    if (LOGGING) {
        loc = here(1); // Get the location of the caller
        console.log(`${prompt}: ${loc.func}:${loc.line}`);
    }
}

function sub() {
    log("enter");
    LOGGING = false;
    log("no output expected");
    LOGGING = true;
    console.log("Ready to exit");
    log("exit");
}

sub();
