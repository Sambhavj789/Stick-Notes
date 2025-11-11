function generate_random_location(start, end) {
    let random_num_x = (Math.random() * (1200))
    let random_num_y = (Math.random() * (end - start)) + start
    return { random_num_x, random_num_y }
}

function get_free_space(occupied = []) {
    let start = 150;
    let end = 500;
    let width = 300;
    let height = 200;
    // let occupied=[];
    let isFound = false;
    let random_num_x;
    let random_num_y;
    while (!isFound) {
        let temp = generate_random_location(start, end);
        random_num_x = temp.random_num_x;
        random_num_y = temp.random_num_y;
        let empty_space=check_if_free_space_available(occupied);
        if(empty_space){
            return {random_num_x:empty_space.random_num_x,random_num_y:empty_space.random_num_y}
        }
        else{
            alert("No space");
            return;
        }
        isFound = check_for_all({ random_num_x, random_num_y, width, height }, occupied)

        //logs
        // console.log("Random Number generated: ", temp);
        // console.log("Occupied Spaces", occupied);
        // console.log("IsOccupied", isFound); //true==>Done
    }
    return { random_num_x, random_num_y }
}
/*
takes coordinates of currenty random number
curr: {random_num_x:float,random_num_y:float,width:int,height:float}
occupied:[{x:float,y:float,height:int,width:float}]
*/
export function check_for_all(curr, occupied) {
    console.log("Check for all data...")
    // console.log("Curr",curr);
    // console.log("Occupied",occupied)
    // console.log("end...")
    for (let i = 0; i < occupied.length; i++) {
        let is_free = (check_is_free(curr, occupied[i]));
        console.log(curr, occupied[i], is_free)
        if (!is_free) {
            return false;
        }
    }
    return true;
}
/*takes
a: {random_num_x:float,random_num_y:float,width:int,height:int}
b: {x:float,y:float,width:int,height:int}
returns: boolean
true==> if both figure will not overlap
false==> if they will overlap
*/
export function check_is_free(a, b) {
    let { random_num_x, random_num_y, width, height } = a;
    //getting values from b and storing in varaible
    let num_x = b.x;
    let num_y = b.y;
    let width_target = b.width;
    let height_target = b.height
    let x_start1 = random_num_x; //840
    let x_start2 = num_x; //458
    let x_end1 = random_num_x + width; //1140
    let x_end2 = num_x + width_target; 758

    let y_start1 = random_num_y; //264
    let y_start2 = num_y;  //295
    let y_end1 = random_num_y + height; //
    let y_end2 = num_y + height_target; //495

    let con1 = false;
    let con2 = false;
    if (is_in_range(x_start1, x_end1, x_start2) || is_in_range(x_start1, x_end1, x_end2)) {
        con1 = true;
    }
    if (is_in_range(y_start1, y_end1, y_start2) || is_in_range(y_start1, y_end1, y_end2)) {
        con2 = true;
    }
    if (con1 && con2) {
        return false;
    }
    return true;
}

export function is_in_range(start, end, num) {
    if (num >= start && num <= end) {
        return true;
    }
    return false;
}

function check_if_free_space_available(occupied = []) {
    let y_start = 150;
    let y_end = 500;
    let width = 300;
    let height = 200
    let x_start = 10;
    let x_end = 1200;
    let curr_x = x_start;
    let curr_y = y_start;
    while (true) {
        let obj={random_num_x:curr_x,random_num_y:curr_y,width,height};
        //check if curr_x has free space or not
        let is_free=check_for_all(obj,occupied);
        if(is_free){
            return obj;
        }
        curr_x+=width+60;
        // console.log("X",curr_x)
        if(curr_x > x_end){
            if(curr_y > y_end){
                return false;
            }
            // console.log("Y",curr_y,height)
            curr_y+=height+1;
            curr_x=x_start;
        }
    }
}

export default get_free_space;
