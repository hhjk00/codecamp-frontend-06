FROM node:14

# RUN mkdir class_build 굳이 따로 만들 필요 없음
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
# RUN yarn start 
# 마음대로 언제든지 사용가능
CMD yarn start
# 한 번 밖에 못 씀
