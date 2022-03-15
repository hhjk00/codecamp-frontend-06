import { Wrapper, Head, Body, User, Id } from '../../../styles/post'


export default function Post() {


    // 여기는 자바스크립트 쓰는곳

  return (
    <Wrapper>
      <Head>
        게시물 등록
      </Head>
      
      <Body>
        <User>
        작성자
        <Id type="text" placeholder="이름을 적어주세요"></Id>
        </User>
      </Body>
    </Wrapper>
    
    )
}
