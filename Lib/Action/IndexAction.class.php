<?php
class IndexAction extends Action {
    public function index(){
		$this->display();
    }

    public function submit(){
		
		if ($this->isPost()){
            $A = $this->_post();

            $JPA = $A['1'] + $A['2'] + $A['3'] + $A['4'] + $A['5'] + $A['6'] + $A['7'] + $A['8'];
            $JPB = 40 - $JPA;

            $TFA = $A['9'] + $A['10'] + $A['11'] + $A['12'] + $A['13'] + $A['14'] + $A['15'] + $A['16'];
            $TFB = 40 - $TFA;

            if($JPA>=$JPB){
            	$JPResult = 'P';
            }else{
            	$JPResult = 'J';
            }

            if($TFA>=$TFB){
            	$TFResult = 'T';
            }else{
            	$TFResult = 'F';
            }

            $User = M("user");
            $data['name'] = $this->_post('name');
            $data['position'] = $this->_post('position');
            $data['company'] = $this->_post('company');
            $data['tel'] = $this->_post('tel');
            $data['jp'] = $JPResult;
            $data['tf'] = $TFResult;
            $User->add($data);

            $this->assign('JPResult',$JPResult);
            $this->assign('TFResult',$TFResult);
            $this->display();
        }else{
            $this->error('非法请求');
        }
    }

    public function admin(){

    	$User = M("User");
    	$list = $User->select();
    	$this->assign('list',$list);
    	$this->display();
    }
}