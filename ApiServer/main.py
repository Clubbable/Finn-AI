from fastapi import FastAPI

import uvicorn
import random

app = FastAPI()

@app.get("/tone")
def read_tone():
    list1 = ['humorous', 'ironic', 'cynical']
    item = random.choice(list1)
    return {"value": item}

if __name__ == '__main__':
    uvicorn.run("main:app", port=3003, reload = True )