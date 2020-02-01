let postId = 1;

// posts 배열 초기 데이터
const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용'
    },
];

/* 포스트 작성
POST /api/posts
{ title, body }
 */
export.write = ctx => {
    // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
    const { title, body } = ctx.request.body;
    postId += 1;
    const post = { id: postId, title, body};
    posts.push(post);
};