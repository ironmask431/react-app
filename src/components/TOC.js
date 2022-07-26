import React, {Component} from "react";

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        console.log('==> TOC render shouldCompnentUpdate');
        //신규props, 기존props에 변화가 있을경우만 render()가 실행되도록 함.
        if(this.props.data === newProps.data){
            return false;
        }else{
            return true;
        }
    }
    render() {
        console.log('==>TOC render()')
        var data = this.props.data;
        var lists = [];
        for(var i=0; i<data.length; i++){
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={'/content/'+data[i].id}
                        onClick={function(id, e){
                            e.preventDefault();
                            this.props.onChangePage(id);
                        }.bind(this, data[i].id)}
                    >{data[i].title}</a>
                </li>
            )
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;