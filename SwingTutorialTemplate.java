import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
 
public class SwingTutorialTemplate extends JPanel {
   // Name-constants to define the various dimensions
   public static final int WINDOW_WIDTH = 300;
   public static final int WINDOW_HEIGHT = 150;
   // ......
 
   // Create the GUI and show it.
   // For thread safety, this method should be invoked from event-dispatching thread.
   private static void createAndShowGUI() {
      // Create and set up the application window
      JFrame frame = new JFrame("...Your Title...");
      frame.setContentPane(new SwingTutorialTemplate());
      frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      frame.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
            // or frame.pack() to "pack" all the components in this frame
      frame.setVisible(true);  // show it
   }
 
   public static void main(String[] args) {
      // Schedule a job for the event-dispatching thread to create and show this application's GUI.
      SwingUtilities.invokeLater(new Runnable() {
         @Override
         public void run() {
            createAndShowGUI();
         }
      });
      // ......
   }
}