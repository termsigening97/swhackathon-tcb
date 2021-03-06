// dbconfig에 있는 연결정보 가져오기
const pool = require('../config/dbconfig')

// 사용하는 모듈이나 라이브러리 정의
let moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

// 컨트롤러 클래스
class CreateController {

  // 글 생성
  async createContent(req, res, next) {
    //수정 data
    var title = req.body.title //req.body.title
    var content = req.body.content //req.body.content
    var category = req.body.category
    var user_id = req.body.user_id
    var pic_path = 'C://usr' //필수조건 아님

    var contentCount = 0
    var date = moment().format('YYYY-MM-DD HH:mm:ss');

    req.contenState = false;

    pool.getConnection((err, conn)=>{
      if(err) throw err;

      conn.query('INSERT INTO content(content_title, content_con, content_date, content_count, de_cate_name, user_id) values(?,?,?,?,?,?)',[
        title, content, date, contentCount, category, user_id
      ], (err, result)=>{
        if(err) throw err;

        conn.query('INSERT INTO content_pic(pic_path, content_num) values (?, ?)', [
          pic_path, result.insertId
        ], (err)=>{
          if(err) throw err;

          req.contenState = true;
          conn.release()
          next();
        })
      })
    })
  }

  // 글 수정
  async updateContent(req, res, next) {
    //수정 data
    var content_num = req.params.contentNum
    var title = req.body.title //req.body.title
    var content = req.body.content //req.body.content
    var category = req.body.category
    var pic_path = 'C://usr/sw' //필수조건 아님

    req.contenUpdateState = false;

    pool.getConnection((err, conn)=>{
      if(err) throw err;

      conn.query('UPDATE content SET content_title = ?, content_con = ?, de_cate_name = ? WHERE content_num = ?',[
        title, content, category, content_num
      ], (err)=>{
        if(err) throw err;

        conn.query('UPDATE content_pic SET pic_path = ? WHERE content_num = ?', [
          pic_path, content_num
        ], (err)=>{
          if(err) throw err;

          req.contenUpdateState = true;
          conn.release()
          next();
        })
      })
    })
  }

  // 글 삭제
  async deleteContent(req, res, next) {
    //수정 data
    var content_num = req.params.contentNum

    req.contenDeleteState = false;

    pool.getConnection((err, conn)=>{
      if(err) throw err;

      conn.query('DELETE FROM content_pic WHERE content_num = ?',[
        content_num
      ], (err)=>{
        if(err) throw err;

        conn.query('DELETE FROM content WHERE content_num = ?', [
          content_num
        ], (err)=>{
          if(err) throw err;

          req.contenDeleteState = true;
          conn.release()
          next();
        })
      })
    })
  }

}

module.exports = CreateController
