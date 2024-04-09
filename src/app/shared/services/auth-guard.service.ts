
 import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

//Admin before login check
//it is work when yo are in process of login
@Injectable({
  providedIn: "root"
})
export class AdminAuthGuardLogin implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role")
    if (role == "admin") {
      this.router.navigate(["/admin-dashboard"]);
      return false;
      //return false means not send you on previous page you keep on current page
    } else {
      return true;
      // return true means again goes on login

    }
  }
}

//Admin after login check
//means work at the time when you are on dashboard
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role")
    if (role == 'admin') {
      return true;
      //return true means it is work at the time when you are on the dashboard  when you click on sign-in and sign-out it does not allow to goes on that page this service prevent you
    } else {
      this.router.navigate(["/admin-login"]);
      return false;
    }
  }
}

//Customer(Buyer & Seller) before login
@Injectable({
  providedIn: "root"
})
export class SellerBuyerAuthGuardLogin implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role")
    if (role == "seller") {
      this.router.navigate(["/seller-dashboard"]);
      return false;
    } else if (role == "buyer") {
      this.router.navigate(["/buyer-dashboard"]);
      return false;
    } else {
      return true;
    }
  }
}

//Seller(Customer) after login
@Injectable({
  providedIn: 'root'
})
export class SellerAuthGaurdService {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role");
    if (role == 'seller') {
      return true;
    } else {
      this.router.navigate(["/sign-in"]);
      return false;
    }
  }
}

//Buyer(Customer) after login
@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGaurdService {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let role = sessionStorage.getItem("role")
    if (role == 'buyer') {
      return true;
    } else {
      this.router.navigate(["/sign-in"]);
      return false;
    }
  }
}