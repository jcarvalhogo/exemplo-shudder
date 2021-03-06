import { Application, PageBasic } from "shudder/lib/core";
import { Column, Row, SizedBox, Text } from "shudder/lib/elements";
import { NavBar } from "./Navbar";
import { Menus } from "./Menus";
import { Corpo } from "./Corpo";

new Application({
    staticDirectory: { dirName: __dirname, directory: ['public', 'arquivos'] },
    home: new PageBasic({
        title: 'Risos Clone',
        child: new Column({
            width: '100%',
            height: '2000px',
            alignItems: 'center',
            children: [
                NavBar(),
                Menus(),
                new SizedBox({ height: '60px' }, ''),
                Corpo(),
            ]
        }),
    }),
});
