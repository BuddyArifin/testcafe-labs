import { Selector } from 'testcafe';

export default class Gits {

    constructor () {
        this.url                = Selector("https://gist.github.com/");
        this.addNewGits         = Selector("a.HeaderNavlink.text-bold.pr-3");
        this.desc               = Selector("input[name='gist[description]']");
        this.filename           = Selector("input[name='gist[contents][][name]']");
        this.indentMode         = Selector("select#indent-mode");
        this.indentSize         = Selector("select#indent-size");
        this.indentWrapMode     = Selector("select#indent-line-wrap-mode");
        this.textFieldContainer = Selector("div.CodeMirror-scroll");
        this.textPerLine        = Selector("span[role='presentation']");
    }
}
