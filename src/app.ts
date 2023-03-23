import Koa from "koa";
import koaBody from "koa-body";
import path from "path";
import Router from "koa-router";
import {Roarr as log} from "roarr";

const app = new Koa()
app.use(koaBody())

app.use(async (ctx, next) => {
    let result = await next()
    log({url: ctx.req.url, method: ctx.req.method, result}, 'mock ')
    ctx.body = {
        code: 1000,
        msg: 'success',
        data: result
    }
})

const router = new Router();
router.prefix("/data");
router.get("/:name", async (ctx, next) => {

});
app.use(router.routes()).use(router.allowedMethods());
const port = 8090;
app.listen(port, async () => {
    console.log(`service start at port ${port}`)
});
