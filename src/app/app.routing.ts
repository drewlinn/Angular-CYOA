import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { Room0Component }   from './room0/room0.component';
import { Room1Component }   from './room1/room1.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PlayerComponent
  },
  {
    path: 'room0',
    component: Room0Component
  },
  {
    path: 'room1',
    component: Room1Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
