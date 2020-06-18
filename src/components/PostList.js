import React from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../actions'

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderList(){
        return this.props.posts.map(el =>{
            return (
                <div className='item' key={el.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{el.title}</h2>
                            <p>{el.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render(){
        console.log(this.props.posts)
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) =>{
    return {posts: state.posts}
}

export default connect(
    mapStateToProps, 
    { fetchPosts: fetchPosts}
)(PostList)