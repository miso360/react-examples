import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from "../../lib/checkLoggedin";

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', checkLoggedIn, postsCtrl.remove);
posts.patch('/:id', checkLoggedIn, postsCtrl.update);

// posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;