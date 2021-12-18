import express from 'express';
import * as UserService from '../services/UserService';
import * as Auth from '../middleware/auth';

const router = express.Router();

//회원가입 라우팅경로
router.post('/signin', UserService.SignUp);
router.post('/login', UserService.Login);
router.get('/logout', UserService.Logout);
//회원가입 라우팅경로
router.post('/check/email', Auth.isNotLoggined, UserService.checkEmail);
router.post('/check/nickname', Auth.isNotLoggined, UserService.checkNickName);
// router.post('/check/account', Auth.isNotLoggined, UserService.checkUserAccount);
router.post('/signup', Auth.isNotLoggined, UserService.SignUp);

//로그인, 로그이웃
router.post('/login', Auth.isNotLoggined, UserService.Login);
router.get('/logout', Auth.isLoggined, UserService.Logout);

//유저 정보 체크
router.post('/get_user', Auth.isLoggined, UserService.getUserInfo);

export default router;
