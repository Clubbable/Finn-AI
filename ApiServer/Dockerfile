FROM python:3.7

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

RUN pip install fastapi uvicorn

COPY . .

EXPOSE 3003
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "3003"]