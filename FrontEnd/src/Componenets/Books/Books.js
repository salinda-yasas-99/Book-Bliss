import React, { useState } from "react";
import {
    Grid,
    InputAdornment,
    Input,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Book from "./Book/Book";
import useStyles from "./BooksStyles";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../../assets/Online-Bookstores-Better-than-Amazon-Featured.jpg";
import "./SingleBookView/bookView.css";



const Books = ({ books, onAddToCart }) => {
    const classes = useStyles();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");

    const categories = ["Sinhala", "English"];
    const subCategories = ["Novel", "Mystery", "Adventure", "Grade 10"];

    return (
        <main className={classes.mainPage}>
            <div className={classes.toolbar} />
            <Carousel fade infiniteLoop useKeyboardArrows autoPlay>
                <Carousel.Item>
                    <div className={classes.backgroundImage}>
                        <img className="d-block w-100" src={logo1} alt="slide" />
                        <Carousel.Caption>
                            <Grid container spacing={2} alignItems="center"  className={"main-container"}>
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
                               {/* style={{backgroundColor:"blue"}}*/}
                                <Grid item xs={10} sm={10} md={10} lg={10} xl={10} >
                                    {/*<Grid item xs={6} sm={6} md={6} lg={6} xl={10} >*/}
                                   {/* style={{backgroundColor:"yellow"}}*/}
                                    <div className={classes.searchs} >
                                        <Input
                                            className={classes.searchb}
                                            type="text"
                                            placeholder="Which book are you looking for?"
                                            onChange={(event) => {
                                                setSearchTerm(event.target.value);
                                            }}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            }
                                        />
                                    </div>
                                    {/*style={{backgroundColor:"red",display:"flex",justifyContent:"space-evenly"}}*/}
                                    <div className={classes.searchs} style={{display:"flex",justifyContent:"space-evenly"}}>
                                        <div>
                                            <FormControl className={classes.formControl} >
                                                <InputLabel>Category</InputLabel>
                                                <Select
                                                    value={selectedCategory}
                                                    onChange={(event) => {
                                                        setSelectedCategory(event.target.value);
                                                    }}
                                                    style={{ minWidth: "250px" }}

                                                >
                                                    {categories.map((category) => (
                                                        <MenuItem key={category} value={category}>
                                                            {category}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel>Sub-category</InputLabel>
                                                <Select
                                                    value={selectedSubCategory}
                                                    onChange={(event) => {
                                                        setSelectedSubCategory(event.target.value);
                                                    }}
                                                    style={{ minWidth: "250px" }}
                                                >
                                                    {subCategories.map((subCategory) => (
                                                        <MenuItem key={subCategory} value={subCategory}>
                                                            {subCategory}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>

                                    </div>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />

                            </Grid>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
            {searchTerm === "" && (
                <>
                    <Grid className={classes.content} container justify="center" spacing={5}>
                        {books.map((singleBook) => (
                            <Grid
                                className={classes.content}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                id={singleBook.id}
                                key={singleBook.id}
                            >
                                <Book book={singleBook} onAddToCart={onAddToCart} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}

            {searchTerm !== "" && (
                <>
                    <Grid className={classes.content} container justify="center" spacing={5}>
                        {books
                            .filter((product) => {
                                if (searchTerm === "") {
                                    return product;
                                } else if (
                                    product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                                ) {
                                    return product;
                                }
                            })
                            .map((product) => (
                                <Grid className={classes.content} item xs={12} sm={6} md={4} lg={3} id="pro">
                                    <Book book={product} onAddToCart={onAddToCart} />
                                </Grid>
                            ))}
                    </Grid>
                </>
            )}
        </main>
    );
};

export default Books;
