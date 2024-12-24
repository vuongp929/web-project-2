<?php
interface Logger {
    public function log($message);
}

abstract class FileHandler {
    abstract public function open($filename);
    
    public function close() {
        echo "File closed.";
    }
}

trait LogTrait {
    public function logToFile($message) {
        echo "Log to file: $message";
    }
}

class FileLogger extends FileHandler implements Logger {
    use LogTrait;

    public function open($filename) {
        echo "Opening file: $filename";
    }

    public function log($message) {
        $this->logToFile($message);
    }
}
?>
