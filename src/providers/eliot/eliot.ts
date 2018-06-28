import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

/*
  Generated class for the EliotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliotProvider {

  data: Observable<any>;
  client_id = '21c0808c-b66f-4587-a827-8686153f4347';
  client_secret = 'G"\\3v#/2*aW62lr3%z~kZ4S*';
  response_type = 'code';
  redirect_uri = 'msal21c0808c-b66f-4587-a827-8686153f4347://auth';
  apiUrl = 'https://partners-login.eliotbylegrand.com/authorize?client_id=21c0808c-b66f-4587-a827-8686153f4347&response_type=code&redirect_uri=urn:ietf:wg:oauth:2.0:oob';
  apiUrl2 = 'https://partners-login.eliotbylegrand.com/token';
  code2 = 'eyJraWQiOiJjcGltY29yZV8wOTI1MjAxNSIsInZlciI6IjEuMCIsInppcCI6IkRlZmxhdGUiLCJzZXIiOiIxLjAifQ..HGWhgB3hDVBwgrGm.Eq44TLGYjAWYau0-bRe8wX1JEuy_t9eEXnlI3dUEohGjzQ8NKpa4sBqtBs8Ul_p4RRemEwuIg7rcYgAfEtTOZS9ZClx6SnV1edz27DbFNQ8qq_xsJJDYOZD2sdTEU2taKvIqW4CI-Kr0raLc540hd_-F-_Iu-uLtSdDIpPTZr1yHM22lhZpifKh5s5kh-0Ur3FedORb0YDsBhOahfE0ulkNhLDyqiJnQnfD1d-f3d3E0obST62Tom2lQ42cIfzU8Ifam_OWP_h1rHjgnrbgCwxq-5SNo6AVdbJnE8Y1rb-8ZUNZq-L7MVaU1iScsqR5drxxPTMYgJysqJYju5bs8xizuOgvASjf06iYkFegrvvDUa8p2RRDW1WsMjUAj2n5ynk9scdrB8q1EvBrgJcEj31DRHRmujd3NLjBL-bz4f-YRPlLRsz0y8T_9fptD3U0luWI1A2zS-loJDMV0gC2ea0TUczsZFRFDPi1U_Kmf8qVUedFrdBHkphT5TpJZ2GMcbVLY9O9P6uPdP27zMb1umsTHuqD5JAvQouQFCIHueUEDE7q-vRU_TnM7t0BM-421mYdgmH8xS4x8hWEo1CRv5JTmvUS6o6-rtr5piPJN0imGfvUyuyDW8iF_Zpd_Uy3kcdiTuF7jfS3LYpVIr9DQWJVSb8E4egB8pFlfRQlYU5EIexQI5mII1XtLiXr6UrCvqXpcWNyx546NjnM0oRIzlh85fcwDDeZV5FQ1Q_GYPXC-e6JFUwUpj46fOjDDpXE8X326BhknzsnV1LYwWFNgPaYTLmGfY5AqD1Rqh3y9ycbIlOvZH4otvKRPQ4_d7QHqmbY10CF_x6UwuuM-YTxg_fdBgZGnXkwa5EGKBViTstCx6A4GaqdsFddes9jqaYdsrkk68lmJ0NiEjGocCPyX.aWgFo2vcUP-aO3WHi28FDg';
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE1MzAwMDE1NTcsIm5iZiI6MTUyOTk5Nzk1NywidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5lbGlvdGJ5bGVncmFuZC5jb20vMGQ4ODE2ZDUtM2U3Zi00Yzg2LTgyMjktNjQ1MTM3ZTBmMjIyL3YyLjAvIiwic3ViIjoiYmU1ZmZiZmYtNWVjMy00ZDgwLTgzN2QtNWI3NjQyNjcyMDllIiwiYXVkIjoiMjFjMDgwOGMtYjY2Zi00NTg3LWE4MjctODY4NjE1M2Y0MzQ3Iiwibm9uY2UiOiI2MzY2NTU5NDc0NzE0MzMzMjUuTldaa1pXWTJNMlF0WXpBMk15MDBOMlkzTFdKa1lqTXRPR0V5TURReFlqRXpNalV3Tmpjd00yUTRZVFF0WXpZeU5pMDBNMlF6TFdFMVpqWXRZemhsTURkallUSXpNVFF4IiwiaWF0IjoxNTI5OTk3OTU3LCJhdXRoX3RpbWUiOjE1Mjk5OTc5NTcsIm9pZCI6ImJlNWZmYmZmLTVlYzMtNGQ4MC04MzdkLTViNzY0MjY3MjA5ZSIsInRmcCI6IkIyQ18xX1RoaXJkQXBwLUFjY291bnRMaW5raW5nIiwiY19oYXNoIjoiNEdncl9Vb3JsRllhc2VLR01JRmNJQSJ9.DXnXClFlHVlKwTE_NIFCb8-JuL5_v7gdWalXnmkT3qMGMW6dUUyjb-i6y-B0uPLkWki_b5K0LrBEq38A8tOlWFo221lhlsC2aTgu4RuQjoIURt7pAlcYQ2gGkQNI8dE0unV3Q7Go6gV1llKBo76K-mpc7-kssodiaGbnyg1G_yErJ6XOzqpXuPWqSHaAiqz2HSO0F5jV7aY4asT42LakUVcsoV9nqT9CWecxMg-zUDPtzCCnX6jEHescyIynxsg8muXch6xzGY8cQxKQdwQkSwBnvqVMsZNPQg9fHi12cj-wSLXBYJOPGemQzLXIqKcR5zSaHzDNNeIJA8dObsdMkQ';
  
  constructor(public http: HttpClient) {

  }

  getUserList() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      })
    })
  }

  // First Request (Doesn't work)
  /*
  getCode() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      });
    });
  }
  */
 
  /*getAccessToken() {
    let headers = new HttpHeaders();
    headers.append("Accept", "application/x-www-form-urlencoded");
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    // const body = {code: this.code2, client_id: this.client_id, grant_type: 'authorization_code', client_secret: this.client_secret};
    let body =  "code=" +'this.code2' + "&client_id=" + this.client_id + "&grant_type=" + 'authorization_code' + "&client_secret=" + this.client_secret;

    let postData = new FormData();
    postData.append('code=', this.code2);
    postData.append('&client_id=', this.client_id);
    postData.append('&grand_type=', 'authorization_code');
    postData.append('&client_secret=', this.client_secret);
    

    this.http.post(this.apiUrl2, postData, {headers: headers})
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }*/
}


