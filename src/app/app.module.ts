import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PickARideComponentComponent } from './pick-a-ride-component/pick-a-ride-component.component';
import { AddANewRideComponentComponent } from './add-a-new-ride-component/add-a-new-ride-component.component';


const routes: Routes=[
{path:'home', pathMatch:'full', redirectTo:'home'},
{path:'addnewride', component:AddANewRideComponentComponent},
{path:'pickaride', component:PickARideComponentComponent}

  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PickARideComponentComponent,
    AddANewRideComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
