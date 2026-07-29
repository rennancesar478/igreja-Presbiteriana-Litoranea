import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Liturgias } from './pages/liturgias/liturgias';
import { Hinos } from './pages/hinos/hinos';
import { Boletins } from './pages/boletins/boletins';
import { Sobre } from './pages/sobre/sobre';
import { Biblia } from './pages/biblia/biblia';
import { Artigos } from './pages/artigos/artigos';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'liturgias', component: Liturgias},
    {path: 'hinos', component: Hinos},
    {path: 'boletins', component: Boletins},
    {path: 'sobre', component: Sobre},
    {path: 'biblia', component: Biblia},
    {path: 'artigos', component: Artigos}
];
