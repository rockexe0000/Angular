
# 第一階段產生dist資料夾
FROM node:16-alpine3.12 as builder

# 指定預設/工作資料夾
WORKDIR /usr/app

# 只copy package.json檔案
COPY ./package*.json ./
# 安裝dependencies
RUN npm install --also=dev

# copy其餘目錄及檔案
COPY ./ ./

COPY src src

# 指定建立build output資料夾，--prod為Production Mode
# --output-path=./dist/Angular30daysMyTodoList

ARG PROFILE=''
# ENV PROFILE=${PROFILE}

RUN echo "Environment: ${PROFILE}"

# RUN npm run build
RUN npm run build${PROFILE}


# pull nginx image
FROM nginx:1.19.8-alpine

# 從第一階段的檔案copy
COPY --from=builder /usr/app/dist/Angular30daysMyTodoList /usr/share/nginx/html

# 覆蓋image裡的設定檔
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
