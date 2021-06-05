
import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import CategoriesDetailPage from '../pages/categories-detail.f7.html';
import TopicsDetailPage from '../pages/topics-detail.f7.html';
import SingleNewsPage from '../pages/single-news.f7.html';
import NewsPage from '../pages/news.f7.html';
import SearchPage from '../pages/search.f7.html';

var routes = [
{
	path: '/',
	component: HomePage,
},
{
	path: '/categories-detail/:id/',
	component: CategoriesDetailPage,
},
{
	path: '/topics-detail/:id/',
	component: TopicsDetailPage,
},
{
	path: '/single-news/',
	component: SingleNewsPage,
},
{
	path: '/news/',
	component: NewsPage,
},
{
	path: '/search/',
	component: SearchPage,
},
{
	path: '(.*)',
	component: NotFoundPage,
},
];

export default routes;