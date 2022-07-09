FROM node as builder

WORKDIR /code

# 单独分离package.json 是为了安装依赖可最大限度利用缓存
ADD package.json package-lock.json /code/
RUN npm install

ADD . /code/
RUN npm run build

#选择更小体积的基础镜像
FROM nginx
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder code/build /usr/share/nginx/html