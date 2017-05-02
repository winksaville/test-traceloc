import { here, setProjectRoot } from "traceloc";
setProjectRoot(__dirname);

function sub() {
    let loc = here();
    console.log(`sub: func=${loc.func} file=${loc.file} line=${loc.line} col=${loc.col}`);
}

sub();
