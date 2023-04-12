import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { ListUsersController } from "./controllers/User/ListUsersController";
import { UpdateUserController} from "./controllers/User/UpdateUserController";
import { DeleteUserController} from "./controllers/User/DeleteUserController";

import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { ensureAuthenticated} from "./midleware/ensureAuthenticated";
import { ensureAdmin} from "./midleware/ensureAdmin";

import { CreateCategoryController } from './controllers/Category/CreateCategoryController';
import { DeleteCategoryController } from './controllers/Category/DeleteCategoryController';
import { ListCategoryController } from './controllers/Category/ListCategoryController';
import { UpdateCategoryController } from './controllers/Category/UpdateCategoryController';

import { CreateProductController } from './controllers/Product/CreateProductController';
import { DeleteProductController } from './controllers/Product/DeleteProductController';
import { ListProductsController } from './controllers/Product/ListProductController';
import { UpdateProductController } from './controllers/Product/UpdateProductController';

import { CreateSalesController } from './controllers/Sales/CreateSalesController';
import { ListSalesController } from './controllers/Sales/ListSalesController';
import { UpdateSalesController } from './controllers/Sales/UpdateSalesController';
import { DeleteSalesController } from './controllers/Sales/DeleteSalesController';

import { CreateDeliveryController } from './controllers/Delivery/CreateDeliveryController';
import { ListDeliveryController } from './controllers/Delivery/ListDeliveryController';
import { UpdateDeliveryController } from './controllers/Delivery/UpdateDeliveryController';
import { DeleteDeliveryController } from './controllers/Delivery/DeleteDeliveryController';

const autenticationUserController  = new AuthenticateUserController();
const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();

const listCategoryController = new ListCategoryController();
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const listProductsController = new ListProductsController();
const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

const createSalesController = new CreateSalesController();
const listSalesController = new ListSalesController();
const updateSalesController = new UpdateSalesController();
const deleteSalesController = new DeleteSalesController();

const createDeliveryController = new CreateDeliveryController();
const listDeliveryController = new ListDeliveryController();
const updateDeliveryController = new UpdateDeliveryController();
const deleteDeliveryController = new DeleteDeliveryController();

const router = Router();


router.post("/login", autenticationUserController.handle);
router.post("/users", createUserController.handle);
router.post('/categories', createCategoryController.handle);
router.post('/products', createProductController.handle);
router.post('/sales', createSalesController.handle);
router.post('/delivery', createDeliveryController.handle);


router.use(ensureAuthenticated)
router.get("/users", listUsersController.handle);
router.put("/users", updateUserController.handle);

router.get('/categories', listCategoryController.handle);
router.put('/categories', updateCategoryController.handle);

router.get('/products', listProductsController.handle);
router.put('/products', updateProductController.handle);

router.get('/sales', listSalesController.handle);
router.put('/sales', updateSalesController.handle);

router.get('/delivery', listDeliveryController.handle);
router.put('/delivery', updateDeliveryController.handle);


router.use(ensureAdmin)
router.delete('/categories/:id', deleteCategoryController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.delete('/products/:id', deleteProductController.handle);
router.delete('/sales/:id', deleteSalesController.handle);
router.delete('/delivery/:id', deleteDeliveryController.handle);


export {router}