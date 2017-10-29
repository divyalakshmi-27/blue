import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { SupertableComponent } from '../components/supertable/supertable.component';
import { TableComponent } from '../components/table/table.component';

export const Approute:Routes = [
	{
		path: 'supertable',
		component: SupertableComponent
    },
    {
		path: 'table',
		component: TableComponent
	},
	
];